'use client';

import { FC, HTMLAttributes } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ICustomBarChartData {
  name: string;
  value: number;
}

interface ICustomBarChart extends HTMLAttributes<HTMLDivElement> {
  data: ICustomBarChartData[]
}

const CustomBarChart: FC<ICustomBarChart> = ({ data }) => {
  return (
    <div
    >
      <ResponsiveContainer minWidth={ '500px' } minHeight={ '300px' } width='100%' height='100%'>
        <BarChart
          width={ 600 }
          height={ 300 }
          data={ data }
          margin={ {
            top: 5,
            right: 30,
            left: 10,
            bottom: 5,
          } }
          barSize={ 40 }
        >
          <XAxis dataKey='name' scale='point' padding={ { left: 40, right: 10 } } />
          <YAxis />
          <Tooltip />
          <Bar dataKey='value' fill='#8884d8' background={ { fill: '#eee' } } />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
