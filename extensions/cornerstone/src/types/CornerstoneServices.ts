import { Types } from '@ohif/core';
import ToolGroupService from '../services/ToolGroupService';
import SyncGroupService from '../services/SyncGroupService';
import SegmentationService from '../services/SegmentationService';
import CornerstoneCacheService from '../services/CornerstoneCacheService';
import CornerstoneViewportService from '../services/ViewportService/CornerstoneViewportService';
import ViewportActionCornersService from '../services/ViewportActionCornersService/ViewportActionCornersService';

interface CornerstoneServices extends Types.Services {
  cornerstoneViewportService: CornerstoneViewportService;
  toolGroupService: ToolGroupService;
  syncGroupService: SyncGroupService;
  segmentationService: SegmentationService;
  cornerstoneCacheService: CornerstoneCacheService;
  viewportActionCornersService: ViewportActionCornersService;
}

export default CornerstoneServices;
