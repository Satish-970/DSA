import java.util.*;

public class KthLargestInArray {
    public static void main(String[] args) {
        KthLargestInArray s = new KthLargestInArray();
        int[] arr = {7, 10, 4, 3, 20};

        System.out.println(s.brute(arr, 2));
        System.out.println(s.optimal(arr, 2));
    }

    int brute(int[] arr, int k) {
        Arrays.sort(arr);
        return arr[arr.length - k];
    }

    int optimal(int[] arr, int k) {
        for (int i = 1; i < k; i++) {
            int max = 0;
            for (int j = 1; j < arr.length; j++)
                if (arr[j] > arr[max]) max = j;
            arr[max] = Integer.MIN_VALUE;
        }
        int max = 0;
        for (int i = 1; i < arr.length; i++)
            if (arr[i] > arr[max]) max = i;
        return arr[max];
    }
}
