import * as React from 'react';
import styles from './FabricCoreDemo.module.scss';
import { IFabricCoreDemoProps } from './IFabricCoreDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class FabricCoreDemo extends React.Component<IFabricCoreDemoProps, {}> {
  public render(): React.ReactElement<IFabricCoreDemoProps> {
    return (
      <div className={ styles.fabricCoreDemo }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column1 }>
              Column 1
            </div>
            <div className={ styles.column2 }>
              Column 2
            </div>
            <div className={ styles.column3 }>
              Column 3
            </div>
          </div>
          <div className={ styles.row }>
            <div className={ styles.column3 }>
              Column 3
            </div>
            <div className={ styles.column1 }>
              Column 1
            </div>
            <div className={ styles.column2 }>
              Column 2
            </div>
          </div>
          <div className={ styles.row }>
            <div className={ styles.column2 }>
              Column 2
            </div>
            <div className={ styles.column1 }>
              Column 1
            </div>
            <div className={ styles.column3 }>
              Column 3
            </div>
          </div>
        </div>
      </div>
    );
  }
}
