import { useState } from 'react';
import { GET_FORM_BY_IDENTIFIER } from './queries/Marketplace.gql'
import { useQuery } from '@apollo/client';

export const useForm = props => {
    const { formUrl } = props;
    // const {
    //     data: resultData,
    //     loading: resultLoading
    // } = useQuery(GET_FORM_BY_IDENTIFIER,
    //     {
    //         variables: {
    //             identifier: formUrl.replace('.html', '')
    //         }
    //     }
    // )
    const resultData = []
    const resultLoading = null
    return {
        resultData,
        resultLoading
    }
}