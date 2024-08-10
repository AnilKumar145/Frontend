### Live Project Demo ::  playpowerlabsfront.netlify.app

# This is the video of how the react app works!

https://github.com/user-attachments/assets/fbcbe59b-a380-40f2-af70-bcb04e621bab

# Play Power Labs Assignments Reference Document

- Frontend Assignment
    
    ### Step 1: Set Up Your React Environment
    
    First, create a new React application using Create React App if you haven’t already set up a project. 
### Open your terminal and run:
npx create-react-app timezone-converter
cd timezone-converter
npm start

This will set up a basic React environment and start your development server.
### Step 2: Install Necessary Packages

You might need a few additional packages like `moment-timezone` for handling time zones and `react-datepicker` for a date picker component:
npm install moment-timezone react-datepicker

### For drag-and-drop functionality (to reorder time zones), you can use react-beautiful-dnd:
npm install react-beautiful-dnd

### Step 3: Create Basic Components

1. **Time Zone Converter Component**:
    - This will be the main component where users interact with the time conversion.
    - Include a slider to adjust time and display the corresponding time in different time zones.
2. **Time Zone Display Component**:
    - A smaller component to render each time zone's current time.
    - Include a button to remove the time zone.
3. **Add Time Zone Component**:
    - Allows users to add new time zones to the list.

### Step 4: Building the Main Component (`TimeZoneConverter`)

In your main component, manage the list of time zones and the current selected time using React's state.



### Step 5: Implement Additional Functionalities

Add components and functionality for:

- Date picking to adjust the current time (`react-datepicker`).
- A button to reverse the order of the time zones.
- A toggle for dark mode (use CSS for styling changes).
- Shareable link generation (use state to manage and display URLs).
- A `Schedule Meet` button that opens Google Calendar with a preset event.

### Step 6: Testing and Deployment

Ensure your application works as intended:

- Test all functionalities manually.
- Write simple unit tests if possible (using Jest and Enzyme or React Testing Library).

Finally, deploy your application using Netlify or similar platforms. Follow the respective platform’s documentation for deployment instructions.
