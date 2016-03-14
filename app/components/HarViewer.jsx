require('fixed-data-table/dist/fixed-data-table.min.css');

import React from 'react';
import _ from 'lodash';
import {Grid,Row,Col,PageHeader,Button,ButtonGroup,Input} from 'react-bootstrap'

import FixedDataTable from 'fixed-data-table';
const Table=FixedDataTable.Table;
const Column=FixedDataTable.Column;

class HarViewer extends React.Component{

    state= {
        columnWidths:{
            url:500,
            size:100,
            time:100
        },
        isColumnResizing:false,
        tableWidth:1000,
        tableHeight:500
    };

    static defaultProps={
      entries:[]
    };

    _getEntry = (index) => {
      return this.props.entries[index];
    };
    _onColumnResized=(newColumnWidth,dataKey)=>{
      let columnWidths=this.state.columnWidths;
      columnWidths[dataKey]=newColumnWidth;
      this.setState({columnWidths:columnWidths,isColumnResizing:false})
    };


    render(){
        return(
            <Grid>
                <Row>
                    <Col sm={12}>
                        <PageHeader>Har Viewer</PageHeader>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Table rowsCount={this.props.entries.length}
                                width={this.state.tableWidth}
                                height={this.state.tableHeight}
                                headerHeight={30}
                                rowHeight={30}
                                rowGetter={this._getEntry}
                                isColumnResizing={this.state.isColumnResizing}
                                onColumnResizeEndCallback={this._onColumnResized}>
                            <Column dataKey="url"
                                    width={this.state.columnWidths.url}
                                    label="Url"
                                    isResizable={true}>
                            </Column>
                            <Column dataKey="size"
                                    width={this.state.columnWidths.size}
                                label="Size"
                                isResizable={true}>
                            </Column>
                            <Column dataKey="time"
                                    width={this.state.columnWidths.time}
                                    label="TimeLine"
                                isResizable={true}>
                            </Column>
                        </Table>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default HarViewer;
