# Flaky test diagnosis: field guide

## Practical focus

Compare failing and passing traces, not just final logs. A retry that passes can indicate a race but does not prove its source. Record whether failures correlate with worker count, load, locale, time zone, test order, or remote service state.
