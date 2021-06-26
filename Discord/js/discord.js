const wrap = document.querySelector('.wrap');
const nameHeader = document.querySelector('.name--header');
const channelBody = document.querySelector('.channels--body');
const userBody = document.querySelector('.users--body');


function discordAPI()
{
    const init = {
        method: 'GET',
        mode: 'cors',
        cache: 'reload'
    };
    fetch('https://canary.discord.com/api/guilds/852715668796473384/widget.json', init).then(function(response)
    {
        if (response.status !== 200)
        {
            console.log("it didn't work" + response.status);
            return
        }
        response.json().then(function(data)
        {
            //var channels = data.channels;
            var users = data.members;
            var serverName = data.name;

            let liWrap = document.createElement('ul');
            liWrap.classList.add('channels--list--wrap');



            nameHeader.children[0].innerHTML = serverName;

            function channelsFill()
            {
                for (let i = 0; i < data.channels.length; i++)
                {
                    let li = document.createElement('li');
                    li.classList.add('channel--name');
                    li.innerText = data.channels[i].name;
                    liWrap.appendChild(li);
                    channelBody.appendChild(liWrap);
                }
            }

            function usersFill()
            {
                for (let n = 0; n < data.members.length; n++)
                {

                    let userWrap = document.createElement('div');
                    let userName = document.createElement('span');
                    let userImage = document.createElement('img');
                    let userGame = document.createElement('span');
                    let userStatus = document.createElement('div');
                    let imageWrap = document.createElement('div');
                    let botTag = document.createElement('div');
                    userWrap.classList.add('user');

                    userName.classList.add('username');

                    userStatus.classList.add('user--status');

                    imageWrap.classList.add('image--wrap');

                    userGame.classList.add('user--game');

                    botTag.classList.add('bot--tag');


                    botTag.innerText = 'BOT';


                    if (users[n].nick === undefined)
                    {
                        userName.innerText = users[n].username;
                    }
                    else
                    {
                        userName.innerText = users[n].nick;
                    }

                    if (users[n].status === 'online')
                    {
                        userStatus.classList.add('status--online')
                    }
                    if (users[n].status === 'idle')
                    {
                        userStatus.classList.add('status--idle');
                    }
                    if (users[n].status === 'dnd')
                    {
                        userStatus.classList.add('status--dnd');
                    }
                    if (users[n].bot === true)
                    {

                        userWrap.appendChild(botTag);
                    }

                    if (users[n].game !== undefined)
                    {

                        userGame.innerText = users[n].game.name;
                    }

                    userWrap.appendChild(userGame);
                    userImage.classList.add('user--image');
                    userImage.setAttribute('src', data.members[n].avatar_url);

                    imageWrap.appendChild(userStatus);
                    imageWrap.appendChild(userImage)
                    userWrap.appendChild(imageWrap);
                    userWrap.appendChild(userName);

                    userBody.appendChild(userWrap);

                }
            }

            channelsFill();
            usersFill();
        })
    })
        .catch(function(err)
        {
            console.log('fetch error: ' + err)
        })


}
discordAPI()