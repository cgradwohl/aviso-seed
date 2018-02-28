## Mock Data Spec

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



