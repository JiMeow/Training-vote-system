using Microsoft.AspNetCore.Mvc;
using TrainingVoteBE.Services;

namespace TrainingVoteBE.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VoteController(IVoteService voteService) : Controller
{
    [HttpGet]
    public async Task<ActionResult<List<VoteDto>>> GetVotes()
    {
        var votes = await voteService.GetVotes();
        return Ok(votes);
    }

    [HttpPost]
    [Route("create")]
    public async Task<ActionResult<VoteDto>> CreateVote([FromBody] VoteDto vote)
    {
        var createdVote = await voteService.CreateVote(vote);
        return Ok(createdVote);
    }

    [HttpPost]
    [Route("increase/{voteOptionIndex}")]
    public async Task<ActionResult<VoteDto>> IncreaseCount([FromBody] VoteDto vote, int voteOptionIndex)
    {
        var updatedVote = await voteService.IncreaseCount(vote, voteOptionIndex);
        return Ok(updatedVote);
    }
}