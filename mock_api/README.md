# Mock Data Server
Before you can run the mock backend server, you need to download the following npm package:\\
`npm install -g json-server`

The seed application has 4 mock api dependancies(see details of the response's in the spec section below): \\
1. m.mock.json
2. summary.mock.json
3. data-by-field.mock.json
4. deals.list.json

In order for the client application to make api requests we need to run a server for each endpoint.\\
cd into the `/mock_api` directory and run the following commands (each command in a new terminal instances):\\
1. json-server --watch m.mock.json
2. json-server --watch summary.mock.json
3. json-server --watch data-by-field.mock.json
4. json-server --watch dealslist.mock.json

Now the client can use each endpoint, using port 3000 as the domain:\\
1. http://localhost:3000/m
2. http://localhost:3000/summary
3. http://localhost:3000/data-by-field
4. http://localhost:3000/deals

Paste the urls into your browser to make sure they are working properly.

For more information on `json-server` go here: https://www.npmjs.com/package/json-server 


# Mock Data Spec
### 1. m.mock.json

params - none\\

all_nodes - all sibling nodes, the concatination of each element in this array is used as query param for call to /summary(H=summaryHierParam$) \\

currentPeriod - period config and data\\

is_rep - boolean if root user is a rep level node\\

node - root user node\\

### 2. summary.mock.json
SUMMARY API IS HIERARCHY LIST AND CONFIG\\

params - H=summaryHierParam$, P, Q\\

config - is_rep ? summary editable : grid editable\\

config.writables.summary - for root user node, displays editable fields in data by row\\

config.writables.grid - for child nodes, displays editable fields in data by column\\

data - DATA-BY-ROW. used for hierarchy list, (most) fields for mobile FM landing page i.e. plan, forecast, upside, downside. \\

### 3. data-by-field.mock.json
DATA-BY-FIELD IS FM LANDING PAGE AND TAP IN VIEW\\

here you can find data by each field i.e. Commit, Aviso Forecast, Booked.\\

### 4. deals.list.json 
here we need to pass a hierarchy query param, in which the response depends on!
To mock this I have added a "H" property to each deal object, so that we can query
the deals api by hiearchy.\\



