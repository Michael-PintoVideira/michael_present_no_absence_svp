export const mission = (agents: {names?: string, code: number}[]): Promise<boolean>{
    return new Promise((resolve, reject) => {
        for(const agent of agents){
            if(agent.code != 42 && agent.code != 0.07)
                reject('Bad agent');

        }

        const found = agents.filter (agent => agent.code == 0.07).length
            return resolve(found);
    })
}