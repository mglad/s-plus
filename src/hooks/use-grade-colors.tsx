import React, { useContext } from 'react';
import { MantineColor, useMantineTheme } from '@mantine/core';

export type ThemedGrades = {
  color: MantineColor
  name: string
}[];

const GradeColorsContext = React.createContext<ThemedGrades>([]);

export function GradeColorsProvider({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme();

  return (
    <GradeColorsContext.Provider
      value={[
        { name: 'D-', color: theme.colors.red[9] },
        { name: 'D', color: theme.colors.red[7] },
        { name: 'D+', color: theme.colors.red[5] },
        { name: 'C-', color: theme.colors.orange[9] },
        { name: 'C', color: theme.colors.orange[7] },
        { name: 'C+', color: theme.colors.orange[5] },
        { name: 'B-', color: theme.colors.green[9] },
        { name: 'B', color: theme.colors.green[7] },
        { name: 'B+', color: theme.colors.green[5] },
        { name: 'A-', color: theme.colors.blue[9] },
        { name: 'A', color: theme.colors.blue[7] },
        { name: 'A+', color: theme.colors.blue[5] },
        { name: 'S-', color: theme.colors.violet[9] },
        { name: 'S', color: theme.colors.violet[7] },
        { name: 'S+', color: theme.colors.violet[5] },
      ]}
    >
      {children}
    </GradeColorsContext.Provider>
  );
}

export function useGradeColors(): ThemedGrades {
  return useContext(GradeColorsContext);
}
