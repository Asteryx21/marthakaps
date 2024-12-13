<template>
  <div class="contact">
    <h1>Contact Me</h1>

    <!-- Contact Section -->
    <div class="contact-container">
      <div class="input-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="form.name" placeholder="Your Name" required />
      </div>
      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" placeholder="Your Email" required />
      </div>
      <div class="input-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          placeholder="Your Message"
          required
        ></textarea>
      </div>
      <button @click="sendEmail">Send</button>
    </div>

    <!-- Social Media Links -->
    <div class="social-media">
      <h2>Find Me on Social Media</h2>
      <ul>
        <li>
          <a href="https://www.instagram.com/_kapski/" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </li>
        <li>
          <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

// Add icons to the library
library.add(faInstagram, faLinkedin, faTwitter, faFacebook)

export default {
  name: 'Contact',
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const form = reactive({
      name: '',
      email: '',
      message: '',
    })

    const sendEmail = async () => {
      if (!form.name || !form.email || !form.message) {
        alert('Please fill out all fields.')
        return
      }

      const formData = new FormData()
      formData.append('service_id', 'service_gqv4gel')
      formData.append('template_id', 'template_c19dk46')
      formData.append('user_id', '6C-TwozL_Uk70Ztsl')
      formData.append('from_name', form.name)
      formData.append('from_email', form.email)
      formData.append('message', form.message)
      formData.append('subject', `Portfolio message from: ${form.email}`)

      try {
        await axios.post('https://api.emailjs.com/api/v1.0/email/send-form', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        alert('Email sent successfully!')
        form.name = ''
        form.email = ''
        form.message = ''
      } catch (error) {
        console.error('Error sending email:', error)
        alert('There was an error sending your email. Please try again.')
      }
    }

    return {
      form,
      sendEmail,
    }
  },
}
</script>

<style scoped>
.contact {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}
.contact-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.input-group label {
  font-weight: bold;
  display: block;
}
.input-group input,
.input-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}

.social-media ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 20px;
}
.social-media li {
  display: inline;
}
.social-media a {
  font-size: 24px;
  text-decoration: none;
}
.social-media a:hover {
}
</style>
