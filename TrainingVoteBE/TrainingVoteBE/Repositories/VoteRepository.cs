using TrainingVoteBE.Services;

namespace TrainingVoteBE.Repositories;

public interface IVoteRepository
{
    VoteType EditVote(VoteType vote);
    VoteType CreateVote(VoteType vote);
    List<VoteType> GetVotes();
}

public class VoteRepository : IVoteRepository
{
    private readonly List<VoteType> _dbVotes = new();

    public VoteType CreateVote(VoteType vote)
    {
        _dbVotes.Add(vote);
        return vote;
    }

    public List<VoteType> GetVotes()
    {
        return _dbVotes;
    }

    public VoteType EditVote(VoteType _vote)
    {
        var vote = _dbVotes.Find(v => v.Id == _vote.Id);
        if (vote == null) return null;
        vote.Title = _vote.Title;
        vote.Description = _vote.Description;
        vote.Options = _vote.Options;
        return vote;
    }
}