namespace TrainingVoteBE;

public class VoteOptionDto
{
    public string Text { get; set; }
    public int Count { get; set; }
}

public class VoteDto
{
    public string Id { get; set; } // Still using string (if intentional)
    public string Title { get; set; }
    public string Description { get; set; }
    public List<VoteOptionDto> Options { get; set; } = new();
}