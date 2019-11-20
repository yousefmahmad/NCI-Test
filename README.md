# NCI-Test

# The Method
The way in which I interpreted this challenge was to take the API provided and to create some data visualization, perhaps by showing the different areas in which patients were tested or different possible causes for their cancer.
So I took the API created an account and got an APP token. I then went about creating a basic Node.js application, using npm init and downloading the appropriate dependencies such as Express.js and Axios. I built a simple index.js file in which I imported the required dependencies and then built out a simple Get Request using axios. Once I got the data, intended to use either Leaflet or Mapbox to show where these patients were located in the United States, in order to demonstrate concentrations of outbreak/illness. 

# Issues
After having created the get request with Axios I ran into an issue of how to create a handshake between my application and the API so that I could get the data. After having read the documentation, done a lot of research (realizing it was an OAuth Endpoint) and speaking to some people about how to go about doing so I came to the conclusion that the best way to do so was implementing this method:

```
axios.get({
  url: 'https://your-endpoint.com/whatever', {
    headers: {
      'X-App-Token': 'your-token-here'
    }
  }
})
```

Unfortunatley however, I ran into a syntax error that I was unable to resolve. If I were to continue working on this I would ask someone else to take a look at it, just to have a fresh pair of eyes see what was going on and if I missed something simple. 

Other issues that I would have run into would have then been trying to learn how to use Mapbox or Leaflet or any other type of data visualization, given the right amount of time and guidance however I'm confident that I would be able to figure it out. Specifically with Leaflett, I realized I would not have been able to use it simply because it requires that the location data be in Longitude and Latitude and so Mapbox would be the better option because it can take the location provided and convert it into Longitude and Latitude (at least from my understanding so far)

# Some of the Research
I understand that the provided code seems sparse, however I spent a majority of my time in researching and planning out how it was I would approach this problem. Seemingly simple at first, it required a flexible and creative thinking on my part since I've never been presented with such a problem. In order to do this I met with a colleague to discuss how to approach the problem and knowing there was a Mapbox meetup last night at their DC office we decided to go and speak to some of the other attendees. I spoke to them more about Data Visualization and what it involved, but did not tell them specifics about the challenge. I wanted to know the methodology behind Data Visualization. After the meetup is when I finally started to build out my application and ran into the unexpected OAuth and syntax problem. 

# Resolving the Issues
The most immediate problem that needs to be resolved is the syntax and OAuth issue so that I can reliably get the data provided from the endpoint. In order to resolve it, as mentioned before, I'd have a fresh set of eyes look to see if I missed something in the syntax. If not, I'd look back at the documentation and see if there's something in there that I missed, along with looking at Axios documentation and how it handles App Tokens. 

From the research and discussions I've had Mapbox seems to be best technology to tackle this project. It would take some time, consultation and guidance in order to get a good handle on it, however I'm confident that I have the tools required to conquer this challenge. 
