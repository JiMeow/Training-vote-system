namespace TrainingVoteBE;

public class VoteOption
{
    public string Id { get; set; } // Primary key (better as int)
    public string Text { get; set; }
    public int Count { get; set; }

    // Foreign key reference to Vote
    public string VoteId { get; set; }
    public Vote Vote { get; set; } // Navigation property
}

public class Vote
{
    public string Id { get; set; } // Still using string (if intentional)
    public string Title { get; set; }
    public string Description { get; set; }
    public List<VoteOption> Options { get; set; } = new();
}