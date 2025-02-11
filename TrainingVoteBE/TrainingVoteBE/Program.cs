using TrainingVoteBE.Repositories;
using TrainingVoteBE.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddControllers();
builder.Services.AddSingleton<IVoteService, VoteService>();
builder.Services.AddSingleton<VoteRepository>();

var app = builder.Build();

// allow cors for all origins
app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) app.MapOpenApi();

app.UseHttpsRedirection();

app.MapControllers();

app.Run();