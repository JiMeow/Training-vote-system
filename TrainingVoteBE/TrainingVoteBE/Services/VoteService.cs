using TrainingVoteBE.Repositories;

namespace TrainingVoteBE.Services;

public interface IVoteService
{
    Task<VoteDto> CreateVote(VoteDto vote);
    Task<List<VoteDto>> GetVotes();
    Task<VoteDto> IncreaseCount(VoteDto vote, int voteOptionIndex);
}

public class VoteService(VoteRepository voteRepository) : IVoteService
{
    public async Task<VoteDto> CreateVote(VoteDto vote)
    {
        await voteRepository.CreateVote(vote);
        return vote;
    }

    public async Task<List<VoteDto>> GetVotes()
    {
        return await voteRepository.GetVotes();
    }

    public async Task<VoteDto> IncreaseCount(VoteDto vote, int voteOptionIndex)
    {
        vote.Options[voteOptionIndex].Count++;
        await voteRepository.EditVote(vote);
        return vote;
    }
}