var basics =
        "<i class='glyphicon glyphicon-console'></i> git init<br>" +
        "---Tells the file that it is connected to git<br>" +
        "<i class='glyphicon glyphicon-console'></i> git pull<br>" +
        "---Fetch and merge from remote repo<br>" +
        "<i class='glyphicon glyphicon-console'></i> git status<br>" +
        "---Displays the relevant information about where the file is in the git project<br>" +
        "<i class='glyphicon glyphicon-console'></i> git remote add origin &lt;URL&gt;<br>" +
        "---Takes the remote file and links it via git to the remote at URL<br>" +
        "<i class='glyphicon glyphicon-console'></i> git log<br>" +
        "---List recent commits",
    unstaged =
        "<i class='glyphicon glyphicon-console'></i> git add &lt;file&gt;<br>" +
        "---Stage file to be committed<br>" +
        "---. or --all to stage all files<br>" +
        "<i class='glyphicon glyphicon-console'></i> git commit -am 'message'<br>" +
        "---Stage then commit all files at once<br>",
    staged =
        "<i class='glyphicon glyphicon-console'></i> git commit -m 'message'<br>" +
        "---Commits file<br>",
    committed =
        "<i class='glyphicon glyphicon-console'></i> git push<br>" +
        "---Pushes file to configured remote<br>" +
        "<i class='glyphicon glyphicon-console'></i> git push &lt;URL&gt;<br>" +
        "---Pushes file to remote at URL<br>",
    pushed =
        "<i class='glyphicon glyphicon-console'></i> git tag -a version#<br>" +
        "---Add new tag<br>",
    branches =
        "<i class='glyphicon glyphicon-console'></i> git branch<br>" +
        "---List current branches<br>" +
        "<i class='glyphicon glyphicon-console'></i> git branch [branchName]<br>" +
        "---Create new branch<br>" +
        "<i class='glyphicon glyphicon-console'></i> git checkout [branchName]<br>" +
        "---Move to branch<br>" +
        "<i class='glyphicon glyphicon-console'></i> git branch -d [branchName]<br>" +
        "---Delete branch<br>" +
        "<i class='glyphicon glyphicon-console'></i> git merge [branchName]<br>" +
        "---Merge [branchName] into current branch<br>";
window.onload = res;
window.onresize = res;
function res()
{
    for(var i = 0; i < document.getElementsByClassName("sec").length; i++)
    {
        document.getElementsByClassName("sec")[i].style.height = ((window.innerHeight).toString() + "px");
    }
}
document.getElementById("sec1sub").innerHTML = "Basics:<br>" + basics;
document.getElementById("sec2sub").innerHTML = "Unstaged:<br>" + unstaged;
document.getElementById("sec3sub").innerHTML = "Staged:<br>" + staged;
document.getElementById("sec4sub").innerHTML = "Committed:<br>" + committed;
document.getElementById("sec5sub").innerHTML = "Pushed:<br>" + pushed;
document.getElementById("sec6sub").innerHTML = "Branches:<br>" + branches;