"# PERN-STACK-YELP-CLONE"
https://www.youtube.com/watch?v=7qAXvOFhlDc

pg library automatically sticks .env database connection data into ./db/index.js new Pool()

dummy data from mockaroo

able to import sql data with psql --username=postgres yelp < C:\swe\postgres-react-mongo-express-yelp-restaurant-finder-sanjeev\PERN-STACK-YELP-CLONE\someresto.sql in the cmd

in the sql shell, \i C:\swe\postgres-react-mongo-express-yelp-restaurant-finder-sanjeev\PERN-STACK-YELP-CLONE\someresto.sql does not work because permission denied.
so did this \i 'C:/swe/postgres-react-mongo-express-yelp-restaurant-finder-sanjeev/PERN-STACK-YELP-CLONE/someresto.sql' and it worked. the regular slash and single quotes is key.

can import from csv in pgadmin, have to set binary path in preferences to where pgsql.exe is located. all or nothing.
if you want to copy everything, but not copy duplicates, just copy everything from sql file and paste into shell.

for infinite scroll, theres a js method by florin pop which looks at window scrollheight, clientheight, scrolltop. theres a react-infinite-scroll component library method by traversy where it takes in the props  
 <InfiniteScroll
dataLength={this.state.images.length}
next={this.fetchImages}
hasMore={true}
loader={<h4>Loading...</h4>} >
theres web dev simplified method with use react callback useref intersection observer method and putting the data in an array, theres griffith plain js intersection observer method and appending html element, theres weibenfalks react method which uses scrolltop scrollheight, clientheight, and onscroll method.
some methods keep track of what page theyre on, then they send it to the server.

cant use a placeholder in a parameterized query for asc desc.

if theres two setstates in one block, it re-renders the component twice.
re-rendering the component will assign a new event listener instance, even if its the same name. have to remove it each time in the useeffect.
have to use useref for isloading so it doesnt re-render twice, only once when offset is increased. a bug is since i trigger the fetch when scrolltop is 80% of scrollheight, the more data that is displayed means the end of the data is going to be farther and farther from the currently visible data. it cant be percentage, has to be fixed pixel value. for some reason this method stops fetching at 420 or 480 or 460, even though total data is 1000. some how its skipping every other fetch.
if scrolling too fast, total is around 980, sometimes 1000, but when scrollign moderately, its complete. i guess this means some fetches are being skipped, especially when disabling caching.

next time for rerendering right away the data after updating, maybe try web dev simplifieds method next time. i managed to make it work with my method, which is kind of hacky, had to make a needsUpdating boolean state in context, and when the user updates info or makes a review, this switches to true, so when history.pushed to the main page, it wont do the infinite scroll fetch which appends the new data. instead, it will do a reset fetch. the downside is the user wont end up where they left of, since the data is reset to the beginning. spent the whole day thinking about this. time to move on.

importing sql might have led to the sequence not being up to date, so when adding another doctor, it says pkey already taken. this is an easy fix, SELECT setval('doctors_id_seq', (SELECT max(id) FROM doctors));

multi page apps suck, theyre so tricky because re-renders after history.pushing, meaning another 20 doctors are added to the page even just updating. spa are better. to preven this, needs to have the fetch as a hook.

work around to pass data between multipage apps is history.push has a second parameter which can pass some data state.
still goes back to the start of the scroll after updating.

seems like useeffect is the way to do async stuff, based on what ive seen in instagram. the other way is through click listeners.

its very important where state is declared. if its too low down the tree, only the children will get rendered.

when inspecting facebook, when scrolling, just the new divs flash, not the old, so i thought they append the new elements. but upon inspecting my app which renders the whole list of data with every new element, just the new divs flash as well. so now i dont know if fb appends new elements or something else. also after inspecting my own app which, in the console, says it rerenders every entry, in the elements however, only new entries appear after scrolling.

order goes functions, then set states batched together because it's async, but if theres a conflic, most recent one wins, which is opposite of normal programming, then effect?

shouldnt call setstate in the body of a component. cant call hook like useSomething in useEffect

infinite scroll component works,takes exactly 45 seconds to load 950 records. baseically it prefetches all the data, then when you scroll down, it appends to the render list. for some reason all of the previous records gets rerendered. probable due to the map function. the scroll height method takes the same time, assuming both are on fast internet. i guess theres a trade off of speed and memory. and if the user waits in the beginning vs during. for preload, takes only 30 seconds. for slower internet, 2 minutes for the scroll height method. bottle neck is in the fetch in the individual. knowing when to fetch is important.
