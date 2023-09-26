import React from 'react';
import { getRules } from '../../services/RuleService';

interface ValidRuleProps {
    value: boolean[];
}

const ValidRule: React.FunctionComponent<ValidRuleProps> = ({ value }) => {
    const rules = getRules();

    return (
        <>
            {rules.map((r, index) => (
                <div key={`is-valid-rules-${index}`} data-testid={`is-valid-rules-${index}`}>
                { `Rule #${ index + 1}: ${r.description} - ${ value[index] ? 'C' : 'X' }` }
                </div>
            ))}
        </>
    );
}

export default ValidRule;