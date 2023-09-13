import React from 'react';
import { Rule, getRules } from './RuleService';

describe('RuleService component tests', () => {

  
  test('It returns expected rules', () => {
    const expectedRules: Rule[] = [
        { 
            expression: /.{5,}/,
            description: 'Must have five characters'
        }, 
        { 
            expression: /\d+/,
            description: 'Must include a digit'
        }, 
    ];

    const actualRules = getRules();

    expect(actualRules).toStrictEqual(expectedRules);
  });

});
