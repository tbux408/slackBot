const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const todoList = [];
const inpoList = [];
const doneList = [];

const prefix = '/';

client.on('messageCreate', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  const response = handleCommand(command, message.content.slice(prefix.length + command.length).trim());

  // print the kanban
  if (command === 'kanban') {
    const allLists = `**TODO:**\n${formatList(todoList)}\n\n**INPO:**\n${formatList(inpoList)}\n\n**DONE:**\n${formatList(doneList)}`;
    message.channel.send(allLists);
  } else {
    message.reply(response);
  }
});



// Helper function to handle commands
function handleCommand(command, messageContent) {

    const foundIndex = findMessageInLists(messageContent);
  
    switch (command) {
      case 'todo':
        if (foundIndex !== -1) {
            todoList.push(messageContent);
            return 'Moved message to TODO list.';
        } else {
            todoList.push(messageContent);
            return 'Added to TODO list.';
        }
  
      case 'inpo':
        if (foundIndex !== -1) {
            inpoList.push(messageContent);
          return 'Moved message to INPO list.';
        } else {
          inpoList.push(messageContent);
          return 'Added to INPO list.';
        }
  
      case 'done':
        if (foundIndex !== -1) {
            doneList.push(messageContent);
          return 'Moved message to DONE list.';
        } else {
          doneList.push(messageContent);
          return 'Added to DONE list.';
        }
  
      default:
        return 'Invalid command.';
    }
  }
  
  // Helper function to find a message in any list and return the index
  function findMessageInLists(messageContent) {
    let foundIndex;
  
    // Check in TODO list
    foundIndex = todoList.findIndex((item) => item === messageContent);
    if (foundIndex !== -1){
        todoList.splice(foundIndex, 1);
        return foundIndex;
    } 
  
    // Check in INPO list
    foundIndex = inpoList.findIndex((item) => item === messageContent);
    if (foundIndex !== -1){
        inpoList.splice(foundIndex, 1);
        return foundIndex;
    } 
  
    // Check in DONE list
    foundIndex = doneList.findIndex((item) => item === messageContent);
    if (foundIndex !== -1){
        doneList.splice(foundIndex, 1);
        return foundIndex;
    } 
  
    return -1;
  }
  



// Helper function to format a list for display
function formatList(list) {
  return list.length > 0 ? list.map((item, index) => `${index + 1}. ${item}`).join('\n') : 'Empty';
}

// SECRET NO ONE SHOULD SEE THE BELOW
client.login('MTE4MTEwODc5MjQwMjkxOTQ4NA.GObobE.vavLuA2zp4QlHQlUe1VYQrCOJIJVvRnJwEuqEQ');