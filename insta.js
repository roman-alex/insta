const insta = {

	scroll: {
		setInterval() {},

		start(interval = 1000, maxvalue = 750) {
      let count = 1;
			this.setInterval = setInterval( () => {
		    if(count >= maxvalue) {
		      clearInterval(insta.scroll.setInterval);
		    }
		    document.querySelector("._gs38e").scrollTo(0,document.querySelector("._gs38e").scrollHeight);
		    count += 1;
		  }, interval);
		},

		stop() {
			clearInterval(this.setInterval);
		}

	},


}
