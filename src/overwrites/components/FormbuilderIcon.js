import React from 'react';
import Icon from '@magento/venia-ui/lib/components/Icon';
import { PenTool as PenToolIcon } from 'react-feather';
import { resourceUrl, useHistory } from '@magento/venia-drivers';
import classes from './blogicon.css';
import { FormattedMessage, useIntl } from 'react-intl';
import { Util } from '@magento/peregrine';
const { BrowserPersistence } = Util;
const storage = new BrowserPersistence();

const FormbuilderIcon = () => {
    const history = useHistory();
    const { formatMessage } = useIntl();

    return (
        <button
            aria-label={formatMessage({
                id: 'formbuilder.formlabel',
                defaultMessage: 'Forms'
            })}
            className={classes.root}
            onClick={() => history.push(resourceUrl('/forms.html'))}
        >
            <Icon src={PenToolIcon} />
            <span className={classes.label}>
                <FormattedMessage id={'Forms'} />
            </span>
        </button>
    )
}
export default FormbuilderIcon