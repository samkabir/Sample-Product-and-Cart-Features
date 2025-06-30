import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export default function LoadingSkeleton({
  type = 'text',
  width = '100%',
  height = 20,
  lines = 1,
  animation = 'wave',
  className = '',
}) {
  return (
    <Box className={className}>
      {[...Array(lines)].map((_, idx) => (
        <Skeleton
          key={idx}
          variant={type}
          width={width}
          height={height}
          animation={animation}
          sx={{ mb: 1 }}
        />
      ))}
    </Box>
  );
}


// type: 'text' | 'rectangular' | 'circular'

// lines: render multiple lines at once

// animation: 'wave' | 'pulse' | false

// className: add Tailwind or custom classes