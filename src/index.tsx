import { ClientContext, GraphQLClient } from 'graphql-hooks';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const client = new GraphQLClient({
	url: 'https://graphql.datocms.com/',
	headers: {
		Authorization: `Bearer ${process.env.REACT_APP_CMS_TOKEN}`,
	},
});

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ClientContext.Provider value={client}>
			<Router>
				<App />
			</Router>
		</ClientContext.Provider>
	</React.StrictMode>
);
