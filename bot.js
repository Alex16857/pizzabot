const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'p>';  


var index = 0;
var index2 = 0;
var index3 = 0;
var index4 = 0;
var index5 = 0;
var index6 = 0;
var index7 = 0;
var index8 = 0;
var index9 = 0;
var stuff = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zuHBdwwzny8s7-8TGOIp2oMrdaSXc1Pzl_VS7e250L_HwfbXgQ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VuDY3KMAYVJH8TFl4x0kZFXng2OyW2DhUVd1Seo0hoFv9XE7VA","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfB4ByklULvWOJwN9fDqd5gVYEq_AUqw76rgwvhrYes7nQ_BiFXQ"]
var meme = ["http://cdn.smosh.com/wp-content/uploads/bloguploads/potter-comic-team-rocket.jpg","http://cdn.smosh.com/wp-content/uploads/bloguploads/potter-comic-pie.gif","http://cdn.smosh.com/wp-content/uploads/bloguploads/potter-comic-efron.jpg","https://lh3.googleusercontent.com/-igodqrTxnco/WwOduSzzANI/AAAAAAAAEzw/NdKHfHZ_-Os01zCht8lqwnuUGHxiQ5VVwCJoC/w663-h980-n-rw/32207802_10157639582906840_1511094929252679680_n.jpg","https://lh3.googleusercontent.com/-CVpoDbzftzY/WwihGGTfQyI/AAAAAAAAEoI/mDtLwSEQe98PTfUhiYZ7u3RUTi0zeKSJwCJoC/w663-h890-n-rw/mckgonalgal.jpg","https://pics.me.me/he-has-a-diary-voldemort-is-like-a-teenage-girl-15022304.png","https://static0.srcdn.com/wordpress/wp-content/uploads/2018/02/18.jpg?q=50&fit=crop&w=738&dpr=1.5","https://static1.srcdn.com/wordpress/wp-content/uploads/2018/02/16.jpg?q=50&fit=crop&w=738&dpr=1.5","https://static0.srcdn.com/wordpress/wp-content/uploads/2018/02/11.png?q=50&fit=crop&w=738&dpr=1.5","https://static1.srcdn.com/wordpress/wp-content/uploads/2018/02/12.jpg?q=50&fit=crop&w=738&dpr=1.5","https://i.pinimg.com/originals/e3/ee/f5/e3eef5e7b444d1208b8c52e5dc742bdd.jpg","http://data.whicdn.com/images/37878509/tumblr_manrfsi72M1rd9rg0o1_400_large.jpg","https://i.pinimg.com/236x/4d/66/4e/4d664ee6e2198d1f6234d8cb6346f0b1--asdf-movie-movie-memes.jpg","https://lh3.googleusercontent.com/-vvIe3Dx7X4k/WuVIkG4nO0I/AAAAAAAAHhE/QtptKbJKODYjWtXavWbFuAKzrtDbQ7sWQCJoC/w994-h947-n-rw/IMG_20180429_095223.jpg","data:image/jpeg;base64,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"  ]; 
var names = ["bob", "fluffy", "peanut", "zackslash", "eh", "fSf", "big t", "ureen", "feestes", "asee"];
var namesdog = ["Nietzsche","Baldwin","woof","pupper","doge", "woofer", "arf"];
var dogpics = ["https://i.ytimg.com/vi/-OSSDuMkk70/hqdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiLjH5U5QUf8tpKJy0NNS30s38KygCCVRjnPDGYvtLVGRla_DvTw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWQF5m76rp-3JHlWDpaJZ2HiD4Peb4nAFJUHbN7rOc8v6ri2TEw",];
var horsepics = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJ2inXtd7SY7MC5-LtuQIShAUdoZlIUvYV-N2lhM_RH5ao4og","https://images.theconversation.com/files/54927/original/x9hcc6pc-1406298853.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1012&h=668&fit=crop","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6lux53TZ59yHZBfyQcKbHoA_Zz4wC7XyibVHAQWac05WX9ib",];
var horsenames = ["neigh","hoof","banana"];
var parrotpics = ["data:image/jpeg;base64,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","https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3f8fddf3c012c3df6b22eef5fdd704a8&w=1000&q=80"]; 
                  
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

shuffle(meme);
shuffle(stuff);
shuffle(names);
shuffle(namesdog);
shuffle(dogpics);
shuffle(horsepics);
shuffle(horsenames);


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
 
client.on('message', message => {
    if (message.content.startsWith(prefix + 'help')) {

      const embed = new Discord.RichEmbed()
           .setTitle("Help")
           .setColor(getRandomColor())
           
           
           .setDescription("**You want help? You get help.**\n **Here are all my commands!** **Do p> before every command!!!**\n ```hpmeme``` **Gives You a Harry Potter meme** ```Dog``` **Picture Of a dog!**\n```Bunny``` **Picture of a bunny**\n ```Hamster``` **Picture of a hamster**\n ```Pizza``` **Gives you a pizza**\n ```Baby Chicken``` **Picture of a baby chicken.**\n ```Chicken``` **Gives you a picture of a chicken.**\n ```Parrot``` **Picture of a parrot.**\n ```Elephant``` **Picture of a elephant.**```Horse``` **Picture Of a horse**```Kick (user)```**Kicks a user.```Ban (user) ``` **Bans a user**")
           .setFooter("PizzaBot", "http://thecookielife.com/wp-content/uploads/2018/04/pizza-cartoon-cute-pizza-stickers-detourshirts-redbubble-space-clipart.jpg")
      message.channel.send({embed});
    }
});          
client.on('message', message => {
    if (message.content.split(' ')[0] == prefix + "kick") {
        var user = message.mentions.users.first();
        var member = message.guild.member(user);
        if(message.member.hasPermission('KICK_MEMBERS')){
           member.kick().then((member) => {
            
                message.channel.send(":wave: " + member.displayName + " has been successfully kicked :pizza: . You hava da pizza");
            }).catch(() => {
             
                message.channel.send("You Have kicked the person :pizza:");
            });
        }
        else{
            message.channel.send("You need to permission to kick members :pizza:");
        }
    }
  
});
client.on('message', message => {
    if(message.content === prefix + "deletechannel"){
       
        message.channel.delete(1000);
        
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "say")) {
        var word = message.content.substr(6);
        if(word.includes("@everyone") | word.includes("@here") | word.includes("@")){
           message.delete(1000);
           message.channel.send("No ping plz :pizza:");
           
        }  
    
        else{
            message.delete(1000);
            message.channel.send(word);
        }
    }  
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "warn")) {
        
        var word2 = message.content.substr(6);
        var words = word2.split(" ");
        var word = word2.substring(words[0].length);
        var aword = word.split(" ");
        var user = message.mentions.users.first();
        var member = message.guild.member(user);
        if(message.member.hasPermission('KICK_MEMBERS')){
            message.channel.send(aword[0] + "has been warned because" + word);
        }
    }
});
client.on('message', message => {
    if (message.content.split(' ')[0] == prefix + "ban") {
        var user = message.mentions.users.first();
        var member = message.guild.member(user);
        if(message.member.hasPermission('BAN_MEMBERS')){
           member.ban().then((member) => {
            
                message.channel.send(":wave: " + member.displayName + " has been successfully Banned :pizza: . ");
            }).catch(() => {
             
                message.channel.send("You Have Banned the person :pizza:.");
            });
        }
        else{
            message.channel.send("You need to permission to ban members :pizza:");
        }
    }
  
});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'hpmeme')) {
    if(index == meme.length - 1){
          shuffle(meme);
          index2 = 0;
      } 
      const embed = new Discord.RichEmbed()
           .setTitle("Harry Potter Meme")
           .setColor(getRandomColor())
           .setDescription("Here is your Harry Potter meme! :smile: :fire:")
           .setImage(meme[index2])
           .setFooter("PizzaBot", "http://thecookielife.com/wp-content/uploads/2018/04/pizza-cartoon-cute-pizza-stickers-detourshirts-redbubble-space-clipart.jpg")
      message.channel.send({embed});
      index2++;
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'hamster')) { 
      if(index4 == names.length - 1){
          shuffle(names);
          index4 = 0;
      } 
      const embed = new Discord.RichEmbed()
           .setTitle("Hamster")
           .setColor(getRandomColor())
           .setDescription("Heres your Hamster named " + names[index4])
           .setImage("cool")
           .setFooter("PizzaBot", "http://thecookielife.com/wp-content/uploads/2018/04/pizza-cartoon-cute-pizza-stickers-detourshirts-redbubble-space-clipart.jpg")
      message.channel.send({embed});
      index4++;
     }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'horse')) { 
      if(index7 == horsepics.length - 1){
          shuffle(horsepics);
          index7 = 0;
      } 
       if(index8 == horsenames.length - 1){
          shuffle(horsenames);
          index8 = 0;
      } 
      const embed = new Discord.RichEmbed()
           .setTitle("Horse")
           .setColor(getRandomColor())
           .setDescription("Heres your Horse named " + horsenames[index8])
           .setImage(horsepics[index7])
           .setFooter("PizzaBot", "http://thecookielife.com/wp-content/uploads/2018/04/pizza-cartoon-cute-pizza-stickers-detourshirts-redbubble-space-clipart.jpg")
      message.channel.send({embed});
      index7++;
      index8++;  
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'pizza')) {
    if(index2 == stuff.length - 1){
          shuffle(stuff);
          index2 = 0;
      } 
      const embed = new Discord.RichEmbed()
           .setTitle("Here's your Pizza :pizza:")
           .setColor(getRandomColor())
           .setDescription("☆☆☆-Pizza-☆☆☆")
           .setImage(stuff[index2])
           .setFooter("PizzaBot", "http://thecookielife.com/wp-content/uploads/2018/04/pizza-cartoon-cute-pizza-stickers-detourshirts-redbubble-space-clipart.jpg")
      message.channel.send({embed});
      index2++;
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'dog')) {
        
      if(index5 == namesdog.length - 1){
          shuffle(namesdog);
          index5 = 0;
      } 
       if(index6 == dogpics.length - 1){
          shuffle(dogpics);
          index6 = 0;
      } 
      const embed = new Discord.RichEmbed()
           .setTitle("dog")
           .setColor(getRandomColor())
           .setDescription("Heres your Dog named " + namesdog[index5])
           .setImage(dogpics[index6])
           .setFooter("PizzaBot", "http://thecookielife.com/wp-content/uploads/2018/04/pizza-cartoon-cute-pizza-stickers-detourshirts-redbubble-space-clipart.jpg")
      message.channel.send({embed});
      index5++;
      index6++;
    }
});
client.on('message', message => {
    if (message.content === prefix + 'baby chicken') {
    	message.channel.send('https://www.walldevil.com/wallpapers/a82/chicken-chick-daffodil.jpg');
  	}
});
client.on('message', message => {
    if (message.content === prefix + 'parrot') {
    	message.channel.send('https://i.ytimg.com/vi/8uXrgv1xIFk/maxresdefault.jpg');
  	}
});
client.on('message', message => {
    if (message.content === prefix + 'elephant') {
    	message.channel.send('https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/MA_00077427_yjtgnj.jpg');
  	}
});
client.on('message', message => {
    if (message.content === prefix + 'bunny') {
    	message.channel.send('https://pbs.twimg.com/profile_images/447374371917922304/P4BzupWu.jpeg');
  	}
});
client.on('message', message => {
    if (message.content === prefix + 'agree') {
    	message.reply('I agree!');
      message.delete(1000);
  	}
});
client.on('message', message => {
    if (message.content === prefix + '6767676767676767676767') {
    	message.channel.send("```Here Are The Rules \n Rule 1: No NFSW \n Rule 2: Don't direct swear words to anybody \n Rule 3: Don't spam swear. \n Rule 4: Try not to ping everybody \n Rule 5: Do the correct commands in the correct channels \n Rule 6: Respect Pizzas```");
  	}
});    

client.login(process.env.681947078049660949);
