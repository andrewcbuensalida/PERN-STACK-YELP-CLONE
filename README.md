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
