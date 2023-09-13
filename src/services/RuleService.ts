
export interface Rule {
    expression: RegExp
    description: string
}

export const getRules = (): Rule[] => {
    return [
        { 
            expression: /.{5,}/,
            description: 'Must have five characters'
        }, 
        { 
            expression: /\d+/,
            description: 'Must include a digit'
        }, 
    ];
}