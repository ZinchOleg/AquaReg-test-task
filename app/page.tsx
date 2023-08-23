import { Metadata } from 'next';
import styles from './page.module.css';
import OrganizationBox from '@components/organization-box/OrganizationBox';
import DMRTable from '@components/dmr-table';
import TRITabs from '@components/tri-tabs';


export const metadata: Metadata = {
  title: ' test task',
};

export default function Home() {
  return (
    <main className={ styles.main }>
      <OrganizationBox />
      <DMRTable />
      <TRITabs />
    </main>
  );
}
