<template>
  <div id="featured">
    <h1>Fill up the GAS! (GEAR ACQUISITION SYNDROME)</h1>

	<div class="container">
		<div class="box box1">
			<div>
	    		<h3>This week's Featured Camera: Canon EOS 7D</h3>
	    		<img class="photo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Canon_EOS_7D_DSLR_body_front.jpg/1024px-Canon_EOS_7D_DSLR_body_front.jpg" alt="image">
	    		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi consectetur eaque tenetur molestias officia minus sint, cupiditate itaque, eos voluptatem suscipit quas voluptates, velit repellat similique soluta. Dicta, quam, enim. ... <a href="#">read more >></a></p>
	    	</div>
		</div>
		<div class="box box2">
			<h3>This Week's Review</h3>
    		<iframe width="560" height="315" src="https://www.youtube.com/embed/HwuUKwqVAqQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>

		<div class="box box3">
			<h3>This week's Blog</h3>
    		<img class="photo" src="https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" alt="image" />
    		<h2>2020 Best New Camera</h2>
    		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque sit, quo, non sequi ipsam, odio libero vitae soluta nostrum dolore error facilis minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque sit, quo, non sequi ipsam, odio libero vitae soluta nostrum dolore error facilis minima. Odit aperiam vel asperiores at, sunt voluptatum ... <a href="#">read more >></a></p>
		</div>

		<div class="box box4">
			<h3>This week's Gallery</h3>
			<p>credits: Jane Doe | Canon EOS R</p>
			<carousel
			    :starting-image="1"
			    :images="images"
			    :auto-slide-interval="1500"
			    :show-progress-bar="true"
			></carousel>	
		</div>
	</div>
</div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'

export default {
	name: 'Featured',
	components: {
		carousel: Carousel
	},
    data() {
		return {
			images: [
            {
                id: '1',
                big: 'https://i.picsum.photos/id/201/450/300.jpg',
                thumb: 'https://i.picsum.photos/id/201/110/90.jpg'
            },
            {
                id: '2',
                big: 'https://i.picsum.photos/id/204/450/300.jpg',
                thumb: 'https://i.picsum.photos/id/204/110/90.jpg'
            },
            {
                id: '3',
                big: 'https://i.picsum.photos/id/1079/450/300.jpg?grayscale',
                thumb: 'https://i.picsum.photos/id/1079/110/90.jpg?grayscale'
            },
            {
                id: '4',
                big: 'https://i.picsum.photos/id/223/450/300.jpg',
                thumb: 'https://i.picsum.photos/id/223/110/90.jpg'
            }
            ],
            activeImage: 0,
            computed: {
            // currentImage gets called whenever activeImage changes
            // and is the reason why we don't have to worry about the 
            // big image getting updated
	            currentImage() {
	                return this.images[this.activeImage].big;
	            }
        	},
	        methods: {
	        	// Go forward on the images array 
	            // or go at the first image if you can't go forward :/ 
	            nextImage() {
	                var active = this.activeImage + 1;
	                if(active >= this.images.length) {
	                    active = 0;
	                }
	                this.activateImage(active);
	            },
	            // Go backwards on the images array 
	            // or go at the last image
	            prevImage() {
	                var active = this.activeImage - 1;
	                if(active < 0) {
	                    active = this.images.length - 1;
	                }
	                this.activateImage(active);
	            },
	            activateImage(imageIndex) {
	                this.activeImage = imageIndex;
	            }
			}
    	}
	}
}
</script>


<style scoped>
#featured {
	margin-bottom: 12em;
}
	.photo {
		width: 303px;
		height: auto;
	}
	.box4 {
		flex-basis:450px;
	}
	.box1, .box3 {
		width: 400px;
	}
	.container {
		display: flex;
		flex-wrap: wrap;
	}
	.box {
		flex-grow: 1;
		margin: 9px;
		border-radius: 5px;
		box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
	}
	h3 {
		background-color: #1a1a2e;
		color: #dadae0;
		width: auto;
	}
</style>