using Microsoft.EntityFrameworkCore;
using TrainingVoteBE.Data;

namespace TrainingVoteBE.Repositories;

public interface IVoteRepository
{
    Task<VoteDto> EditVote(VoteDto vote);
    Task<VoteDto> CreateVote(VoteDto vote);
    Task<List<VoteDto>> GetVotes();
}

public class VoteRepository(VoteDbContext dbContext) : IVoteRepository
{
    public async Task<VoteDto> CreateVote(VoteDto vote)
    {
        var existingVote = await dbContext.Votes.FindAsync(vote.Id);
        if (existingVote != null)
            throw new Exception("Vote already exists");

        var newVote = new Vote
        {
            Id = vote.Id,
            Title = vote.Title,
            Description = vote.Description
        };

        await dbContext.Votes.AddAsync(newVote);

        var voteOptions = vote.Options.Select(option => new VoteOption
        {
            Id = Guid.NewGuid().ToString(),
            Text = option.Text,
            Count = 0,
            VoteId = vote.Id, // This establishes the relationship with the Vote
            Vote = newVote // Link to the existing Vote
        }).ToList();

        await dbContext.VoteOptions.AddRangeAsync(voteOptions);

        // Save all changes
        await dbContext.SaveChangesAsync();

        return new VoteDto
        {
            Id = newVote.Id,
            Title = newVote.Title,
            Description = newVote.Description,
            Options = voteOptions.Select(o => new VoteOptionDto
            {
                Text = o.Text,
                Count = o.Count
            }).ToList()
        };
    }


    public async Task<VoteDto> EditVote(VoteDto vote)
    {
        var _vote = await dbContext.Votes.FindAsync(vote.Id);
        if (_vote == null)
            throw new Exception("Vote not found");

        var optionsList = await dbContext.VoteOptions.Where(voteOption => voteOption.VoteId == vote.Id).ToListAsync();

        for (var i = 0; i < optionsList.Count; i++) optionsList[i].Count = vote.Options[i].Count;

        dbContext.VoteOptions.UpdateRange(optionsList);
        await dbContext.SaveChangesAsync();

        return vote;
    }


    public async Task<List<VoteDto>> GetVotes()
    {
        return await dbContext.Votes
            .Select(v => new VoteDto
            {
                Id = v.Id,
                Title = v.Title,
                Description = v.Description,
                Options = v.Options.Select(o => new VoteOptionDto
                {
                    Text = o.Text,
                    Count = o.Count
                }).ToList()
            })
            .ToListAsync();
    }
}