using Microsoft.AspNetCore.Mvc;
using TrainingVoteBE.Services;

namespace TrainingVoteBE.Controllers;

[ApiController]
[Route("api/vote")]
public class VoteController(IVoteService voteService) : Controller
{
    [HttpGet]
    public List<VoteType> GetVotes()
    {
        return voteService.GetVotes();
    }

    [HttpPost]
    [Route("create")]
    public VoteType CreateVoteType([FromBody] VoteType vote)
    {
        return voteService.CreateVote(vote);
    }

    [HttpPost]
    [Route("increase/{voteOptionIndex}")]
    public VoteType IncreaseCount([FromBody] VoteType vote, int voteOptionIndex)
    {
        return voteService.IncreaseCount(vote, voteOptionIndex);
    }
}