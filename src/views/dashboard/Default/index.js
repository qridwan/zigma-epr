import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import TargetCircleCharts from './TargetCircleChart';
import BarChartBox from './BarChartBox';
import PurchaseCart from './PurchaseCart';
import RecentNotification from './RecentNotification';
import RecentDownloads from './RecentDownloads';
import BottomCard from './BottomCard';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <TargetCircleCharts isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <BarChartBox isLoading={isLoading} />
                    </Grid>
                    {/* <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeDarkCard isLoading={isLoading} />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeLightCard isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid> */}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={6} lg={4}>
                        <PurchaseCart isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <RecentNotification isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <RecentDownloads isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
                <BottomCard isLoading={isLoading} />
            </Grid>
        </Grid>
    );
};

export default Dashboard;
