var node_ssh, ssh;
node_ssh = require("node-ssh");
ssh = new node_ssh();

let print = function(data) {
      console.log(data);
};

async function connectVM() {
		        await ssh.connect({
			          host: "127.0.0.1",
				        username: "karim",
					      password:"lola2005" });
			print("Connected!");
			  
}

connectVM();
