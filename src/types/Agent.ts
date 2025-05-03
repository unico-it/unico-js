export interface Agent {
	id: string;
	name: string;
	description: string;
	is_shared: boolean;
	is_owner: boolean;
	creation_date: Date;
	update_date: Date;
}
