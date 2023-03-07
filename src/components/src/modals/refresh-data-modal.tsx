// Copyright (c) 2023 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from 'react';
import styled from 'styled-components';
import DatasetLabel from '../common/dataset-label';
import {FormattedMessage} from '@kepler.gl/localization';
import {Layer} from '@kepler.gl/layers';
import {KeplerTable} from '@kepler.gl/table';

const StyledMsg = styled.div`
  margin-top: 24px;
  overflow-wrap: break-word;
`;

export interface RefreshDatasetModalProps {
  dataset: KeplerTable;
  layers: Layer[];
}

type DatasetMetadata = {
  connection?: {
    connectionName?: string;
    query?: string;
  };
};

export const RefreshDatasetModal: React.FC<RefreshDatasetModalProps> = ({dataset, layers = []}) => {
  // retrieve only layers related to the current dataset
  const currDatasetLayers = layers.filter(layer => layer.config.dataId === (dataset && dataset.id));
  const meta = dataset.metadata as DatasetMetadata;
  const connection = meta.connection ?? {};

  return (
    <div className="refresh-dataset-modal">
      <DatasetLabel dataset={dataset} />
      <StyledMsg className="refresh-dataset-msg">
        <FormattedMessage
          id={'modal.refreshData.warning'}
          values={{length: currDatasetLayers.length}}
        />
        <p>Database Connection:</p>
        <p>{connection.connectionName}</p>
      </StyledMsg>
    </div>
  );
};

const RefreshDatasetModalFactory = () => RefreshDatasetModal;
export default RefreshDatasetModalFactory;
