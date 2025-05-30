export type MainConfig = {
	admin: {
		listen: string;
	};
	apps: {
		http: {
			servers: {
				main: {
					listen: [":80", ":443"];
					automatic_https: {
						disable: boolean;
					};
					routes: RouteConfig[];
				};
			};
		};
	};
};

export type RouteConfig = {
	match: { host: string[] }[];
	handle: HandlerConfig[] | RouteHandlerConfig[];
};

export type RouteHandlerConfig = {
	handler: "subroute";
	routes: [{ handle: HandlerConfig[] }]
}

export type HandlerConfig = {
	handler: "reverse_proxy";
	upstreams: { dial: string }[];
	headers: {
		request: {
			set: {
				Host: string[];
				"X-Origin-Host": string[];
				"X-Origin-IP": string[];
			};
		};
	};
	transport: {
		protocol: string;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		tls?: Record<string, any>;
	};
};
