import React, {useCallback, useMemo, useState} from 'react'
import { useForm } from '../../talons/useForm'
import BreadCrumb from '../breadcrumb/index';
import classes from './form.css';
import { Title, Meta } from '@magento/venia-ui/lib/components/Head';
import { Util } from '@magento/peregrine';
const { BrowserPersistence } = Util;
const storage = new BrowserPersistence();

const ShopAll = props => {
    const { formUrl = "" } = useParams();
    const standardizedUrl = formUrl.replace(".html", "")
    const title = "View Form"
    const titleName = title
    const description = "View form description"
    const form_title = "Form: Contact Form"

    const talonProps = useForm({ formUrl });
    const {
        resultData,
        resultLoading
    } = talonProps
    return (
        <div className={classes.mainCtn}>
            <Title>{title}</Title>
            <Meta name="description" content={description} />
            <BreadCrumb items={
                [
                    {
                        label: form_title
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
                    View form detail
                </div>
            </div>
        </div>
    )
}

export default ShopAll