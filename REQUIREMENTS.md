## Requirements

The requirements below are broken into step-by-step instructions, which model the way we **recommend you approach the project**.

### Get all candies in the goodie bag

#### Backend

- [ /] Write a `candies` model with the following information:
  - [/ ] name - not empty or null
  - [ /] description - not empty or null
  - [ /] quantity - cannot exceed 10 of the same candy in your goodie bag
  - [ /] imageUrl - with a default value
- [ /] Write a route to serve up all candies

#### Frontend

- [ ] Write a candies sub-reducer to manage candies in your Redux store
- [ ] Write a component to display a list of all candies
- [ ] Display the all-candies component when the url matches `/candies`
- [ ] Add links to the navbar that can be used to navigate to the all-candies view and the home view (`/`)

Remember to commit early and often as you're working!

### Extra

If you finish the above 'get all candies' functionality, feel free to branch out and add some more functionality! Here's some suggestions:

- Get single candy
  - Navigating to `/candies/:id` will display all detail about that candy
  - Clicking on a candy in the all-candies view will navigate to that candy's single view
- Update candy quantity
  - The single candy view has 2 buttons, to increase or decrease that candy's quantity
- Go wild on the UI!
  - Try out some UI libraries like Material, Bootstrap, or Semantic... to name a few
