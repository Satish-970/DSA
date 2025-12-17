import java.util.*;

public class KthSmallestInArray {
    public static void main(String[] args) {
        KthSmallestInArray s = new KthSmallestInArray();
        int[] arr = {7, 10, 4, 3, 20};

        System.out.println(s.brute(arr, 2));
        System.out.println(s.optimal(arr, 2));
    }
 
    int brute(int[] arr, int k) {
        Arrays.sort(arr);
        return arr[k - 1];
    }

    int optimal(int[] arr, int k) {
        for (int i = 1; i < k; i++) {
            int min = 0;
            for (int j = 1; j < arr.length; j++)
                if (arr[j] < arr[min]) min = j;
            arr[min] = Integer.MAX_VALUE;
        }
        int min = 0;
        for (int i = 1; i < arr.length; i++)
            if (arr[i] < arr[min]) min = i;
        return arr[min];
    }
}
