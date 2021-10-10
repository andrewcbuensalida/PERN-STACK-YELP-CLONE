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

order of stack trace of official fetch pattern from react, first body functions, then return, then useEffect, then functions in first setstate and suspend, rerender, state changes when it passes its usestate then continues rendering, then continue from first setstate in the fetch, then before going in second setstate, rerenders which resets the first state, passes first useState which sets it again, then passes second usestate which continues where it left off in the second setstate, then continues where it left off in the second usestate, renders, continues where it left off after the second setstate in the fetch, then same behavior if theres a third. maybe thats why they say nothing should be above the useStates, then continue from second set state. just the first setstate is different becauese it enters the setstate on the first round, not when it passes its usestate. SOOOOOO WWEEIRRDDD. whenever it goes into the setstate on the first try, when it rerenders, it just passes its usestate and updates and renders the whole thing, but if it stops before it enters its setstate, when it goes back to the top and passes its usestate, it gets transported back into its setstate. so returning either goes to the top or to its usestate. basically, first render, it doesnt pass !isLoading nor data, second render it passes !isLoading but no data to render, third it passes both and renders. thats why when rendering something, always have an if isloading check to prevent redundant rendering. if you nest a setstate in a setstate, theres an extra render. it actually doesnt return until all the setstates have been changed. very weird, even if items have a value, and its mapping, no output. not even in the console log of the child component. mysterious. just stick to the official recommended pattern.

can update state in two ways, directly like setCount(count+1) or through a function like setCount(count=>count+1). the official guideline for fetch uses the direct approach. using this approach, the second setstate doesnt jump back inside the second setstate after passing its usestate because theres nothing to jump back into. other than that, its the same as direct approach. if setstate is initiated by a click event instead of useeffect, it doesnt return to the top, it just goes to the next line.

shouldnt call setstate in the body of a component. cant call hook like useSomething in useEffect

even if context changed in one route, it didnt rerender another route using that same context.

infinite scroll component works,takes exactly 45 seconds to load 950 records. baseically it prefetches all the data, then when you scroll down, it appends to the render list. for some reason all of the previous records gets rerendered. probable due to the map function. the scroll height method takes the same time, assuming both are on fast internet. i guess theres a trade off of speed and memory. and if the user waits in the beginning vs during. for preload, takes only 30 seconds. for slower internet, 2 minutes for the scroll height method. bottle neck is in the fetch in the individual. knowing when to fetch is important. also try react virtualize or react window. or lazy load with react suspense. conditionally rendered review doctor component and went from 45 seconds to 35 seconds. conditionally rendered update component and went from 35 to 25 seconds.
didnt even use suspense or lazy.

to get top doctors with most reviews
select 
    doctors.id, 
    doctors.name , 
    count(doctors.id) 
from 
    doctors 
inner join 
    reviews 
    on doctors.id = doctor_id 
group by 
    doctors.id 
order by
    count 
desc;

have to change axios to a different path.

ss -tnlp | grep "node /" to see what ports pm2 processes are running on.

make sure when copy pasting stuff from vs code to ec2 connect, paste it in the url first, then copy from there and paste.

to install nginx https://ubuntu.com/tutorials/install-and-configure-nginx#2-installing-nginx
test by going to http (not https) of your ip address
to configure nginx to proxy to react, https://www.sitepoint.com/configuring-nginx-ssl-node-js/
server {
listen 80;
listen [::]:80;

root /home/ubuntu/doctordb/client/build;
index index.html index.htm index.nginx-debian.html;
server_name anhonestobserver.com www.anhonestobserver.com <ip address really important>;
location / {
try_files $uri $uri /index.html;
}

location /api {
proxy_pass http://localhost:3001;
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection 'upgrade';
proxy_set_header Host $host;
proxy_cache_bypass $http_upgrade;
}
}
important commands:
sudo systemctl status nginx
sudo nano /etc/nginx/sites-available/default
sudo nginx -t  //to check if its alright
sudo service nginx restart
now can go to ip address without the :3000 at the end.

to install postgres on ubuntu, postgres automatically creates a user called postgres.
switch to that user with sudo -i -u postgres
now run psql
to exit out of postgres, \q, which will .. just watch this to install and import data into postgres
 https://www.youtube.com/watch?v=NjYsXuSBZ5U

then manually create the .env in the server directory so node can log into psql.
could probably also do the global .env method.

seems that react build folder already contains node_modules

npm ci to install exactly the same version
npm i --prefer-offline to not install if it's in cache, this doesnt work with npm ci
npm i --production to not install devdependencies, this works with npm ci

since could build during the deploy, have to build locally, then push to github. the react-scripts folder in the node_modules is empty, so i tried npm i react-scripts, but ends up crashing the instance. 