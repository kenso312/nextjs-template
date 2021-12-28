import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { SSRConfig, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ComponentTemplate from '@/components/_template';

interface Props extends SSRConfig {}

function ViewTemplate(_props: Props): JSX.Element {
  /* Define state / hook */
  const { t } = useTranslation(['common']);

  /* Custom Data Object for render or other usages */

  /* render control function / logic */

  /* Data Change Listeners - useEffect/useMemo/useCallback */

  /* Render */
  return (
    <div>
      <ComponentTemplate text={t('welcome')} />
    </div>
  );
}

export const getStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || 'en-US', ['common'])),
    },
  };
};

export default ViewTemplate;
