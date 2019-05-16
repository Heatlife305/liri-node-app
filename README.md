# liri-node-app
- - -

## ABOUT THE APP
LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data. The user has the option of using four commands (listed below) in conjuntion with specific parameters associated with the commands. The  `Commands` are:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`

- - -
## HOW TO USE LIRI
### **Video Guide**

Watch the video here: https://drive.google.com/file/d/15N2FaqUbGRNyKgrSGYgRIoHvxI5EaN8V/view?usp=sharing

### **Step by Step instructions**

1. Open your terminal such as Bash.
2. Navigate to the folder that contains the `liri.js` file. 
3. Depending on the command you run, the output will vary. 

    **Example 1**: Run the `concert-this` command
    
        node liri.js concert-this <name of artist or band>
    

    ![Results](/images/concert-this.png)

    **Example 2**: Run the `spotify-this-song` command
    
        node liri.js spotify-this-song <name of song>
    

    ![Results](/images/spotify-this-song.png)

    **Example 3**: Run the `movie-this` command
    
        node liri.js movie-this <name of movie>
    


    ![Results](/images/movie-this.png)


    **Example 4**: Run the `do-what-it-says` command
        
        node liri.js do-what-it-says
        
    Output: The system will read the text in the random.txt file, and perform the comman listed in the random.txt file. 
    
    See screen-shot below:

    ![Results](/images/do-what-it-says.png)

- - -
