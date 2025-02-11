using TrainingVoteBE.Repositories;

namespace TrainingVoteBE.Services;

public class VoteOption
{
    public string Text { get; set; }
    public int Count { get; set; }
}

public class VoteType
{
    public string Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public List<VoteOption> Options { get; set; }
}

public interface IVoteService
{
    VoteType CreateVote(VoteType vote);
    List<VoteType> GetVotes();
    VoteType IncreaseCount(VoteType vote, int voteOptionIndex);
}

public class VoteService(VoteRepository voteRepository) : IVoteService
{
    public VoteType CreateVote(VoteType vote)
    {
        voteRepository.CreateVote(vote);
        return vote;
    }

    public List<VoteType> GetVotes()
    {
        return voteRepository.GetVotes();
    }

    public VoteType IncreaseCount(VoteType vote, int voteOptionIndex)
    {
        if (vote.Options.Count <= voteOptionIndex)
            return null;

        vote.Options[voteOptionIndex].Count++;
        voteRepository.EditVote(vote);
        return vote;
    }
}