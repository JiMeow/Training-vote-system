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
        try
        {
            var votes = await voteService.GetVotes();
            return Ok(votes);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPost]
    [Route("create")]
    public async Task<ActionResult<VoteDto>> CreateVote([FromBody] VoteDto vote)
    {
        try
        {
            var createdVote = await voteService.CreateVote(vote);
            return Ok(createdVote);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPost]
    [Route("increase/{voteOptionIndex}")]
    public async Task<ActionResult<VoteDto>> IncreaseCount([FromBody] VoteDto vote, int voteOptionIndex)
    {
        try
        {
            var updatedVote = await voteService.IncreaseCount(vote, voteOptionIndex);
            return Ok(updatedVote);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
}