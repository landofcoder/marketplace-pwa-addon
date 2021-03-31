import React, {useCallback, useMemo, useState} from 'react'
import BreadCrumb from '../breadcrumb/index';
import classes from './home.css';
import { Title, Meta } from '@magento/venia-ui/lib/components/Head';
import { Util } from '@magento/peregrine';
const { BrowserPersistence } = Util;
const storage = new BrowserPersistence();

const Home = props => {
    const title = "List Formbuilder"
    const titleName = title
    const description = "List available forms"
    return (
        <div className={classes.mainCtn}>
            <Title>{title}</Title>
            <Meta name="description" content={description} />
            <BreadCrumb items={
                [
                    {
                        label: 'Forms'
                    }
                ]
            }
            />
            <h1>{titleName}</h1>
            <div className={classes.formRoot}>
                <div className={classes.formSidebar}>
                    Search form box
                </div>
                <div className={classes.formListing}>
                    List form at here
                </div>
            </div>
        </div>
    )
}

export default Home