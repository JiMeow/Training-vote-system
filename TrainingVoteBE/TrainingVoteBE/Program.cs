using Microsoft.EntityFrameworkCore;
using TrainingVoteBE.Data;
using TrainingVoteBE.Repositories;
using TrainingVoteBE.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddScoped<IVoteService, VoteService>();
builder.Services.AddScoped<VoteRepository>();

builder.Services.AddDbContext<VoteDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddSwaggerGen();

var app = builder.Build();

// allow cors for all origins
app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.MapControllers();

app.Run();