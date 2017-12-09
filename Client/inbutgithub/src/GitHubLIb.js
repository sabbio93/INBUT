/**
 * 
 */
import GitHub from 'github-api';
import Requestable from '/home/andrea/Documenti/worksapceEclipse/INBUT/Client/inbutgithub/node_modules/github-api/dist/components/Requestable.js';

/**
 * 
 */
class GitHubUser
{
    constructor(user: String,passwd: String)
    {
         this.auth = new GitHub({
            username: user,
            password: passwd
                });
    }
    utente=this.auth.getUser();
}
export default GitHubUser;

/**
 * 
 * @param {*} auth 
 */
export function listAllMyRepo(auth: GitHubUser)
{
    return auth.utente().listRepos();
    /*
    let nomi=[];
     auth.listRepos().then(function({data: reposJson})
        {
          reposJson.map((element)=>{nomi.push(element.name)})
        });
    return nomi;
    */
}


function getContentOfAFile()
{
  requ._request("GET","https://api.github.com/repositories/89581670/contents/Button/src/App.js",null,null,true).then(function({data:resp})
      {
        console.log(resp);
      });
}

function getContentOfADir()
{
  /**
   * TODO implement
   */
  console.log("error:implement this func");
}

function listAllFileInARepo()
{
  requ._request("GET","https://api.github.com/repositories/89581670/contents/Button/src/App.js").then(function({data:resp})
      {
        console.log(resp);
      });
}

function first()
  {
     var gh = new GitHub({
   username: 'sabbio93',
   password: 'BlackLife1993@#'
    });

    var me = gh.getUser();
    console.log(me);

   me.listRepos().then(function({data: reposJson})
   {
     console.log(`i have ${reposJson.length} repos!`);
     //console.log(reposJson);
     let element = reposJson[0];
     console.log(element.name);
     console.log(element);

     
     var repo = gh.getRepo(me,element.name);
      console.log(repo);

    
      var requ = new Requestable(me);
      console.log(requ);
      requ._request("GET","https://api.github.com/repositories/89581670/contents/Button/src/App.js",null,null,true).then(function({data:resp})
      {
        console.log(resp);
      });
      
        
   });
  }

function second()
{
    var gh = new GitHub({
   username: 'sabbio93',
   password: 'BlackLife1993@#'
    });

    var me = gh.getUser();
    var requ = new Requestable(me);

      requ._request("GET","https://api.github.com/repositories/89581670/contents/Button/src/").then(function({data:resp})
      {
        console.log(resp);
      });

      requ._request("GET","https://api.github.com/repositories/89581670/contents/Button/src/App.js").then(function({data:resp})
      {
        console.log(resp);
      });

      requ._request("GET","https://api.github.com/repositories/89581670/contents/Button/src/App.js",null,null,true).then(function({data:resp})
      {
        console.log(resp);
      });

}
