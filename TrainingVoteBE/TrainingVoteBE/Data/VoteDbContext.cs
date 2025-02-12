using Microsoft.EntityFrameworkCore;

namespace TrainingVoteBE.Data;

public class VoteDbContext(DbContextOptions<VoteDbContext> options) : DbContext(options)
{
    public DbSet<Vote> Votes => Set<Vote>();
    public DbSet<VoteOption> VoteOptions => Set<VoteOption>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Define the relationship
        modelBuilder.Entity<Vote>()
            .HasMany(v => v.Options)
            .WithOne(o => o.Vote)
            .HasForeignKey(o => o.VoteId);

        modelBuilder.Entity<VoteOption>()
            .HasKey(o => o.Id);

        // Seed Votes
        modelBuilder.Entity<Vote>().HasData(
            new Vote
            {
                Id = "1",
                Title = "What is your favorite programming language?",
                Description = "Choose your favorite programming language"
            }
        );

        // Seed VoteOptions separately
        modelBuilder.Entity<VoteOption>().HasData(
            new VoteOption { Id = "1", Text = "C#", Count = 0, VoteId = "1" },
            new VoteOption { Id = "2", Text = "Java", Count = 0, VoteId = "1" },
            new VoteOption { Id = "3", Text = "Python", Count = 0, VoteId = "1" }
        );
    }
}