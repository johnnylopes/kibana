/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import PropTypes from 'prop-types';
import React, { SFC } from 'react';

export interface Props {
  /** Optional value for the component */
  value?: string;
  /** Function to invoke when the filter value is changed */
  onChange: (value: string) => void;
  /** Function to invoke when the filter value is committed */
  commit: (value: string) => void;
}

export const AdvancedFilter: SFC<Props> = ({ value = '', onChange, commit }) => (
  <form
    onSubmit={e => {
      e.preventDefault();
      commit(value);
    }}
    className="canvasAdvancedFilter"
  >
    <EuiFlexGroup gutterSize="xs">
      <EuiFlexItem>
        <input
          type="text"
          className="canvasAdvancedFilter__input"
          placeholder="Enter filter expression"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <button className="canvasAdvancedFilter__button" type="submit">
          Apply
        </button>
      </EuiFlexItem>
    </EuiFlexGroup>
  </form>
);

AdvancedFilter.defaultProps = {
  value: '',
};

AdvancedFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  commit: PropTypes.func.isRequired,
};
